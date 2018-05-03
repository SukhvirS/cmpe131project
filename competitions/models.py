import datetime

from django.db import models
from django.utils import timezone
from datetime import datetime


# Create your models here.
class Competition(models.Model):
    competition_title = models.CharField(max_length = 200)
    competition_description = models.CharField(max_length = 1000, default = "")
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    deadline = models.CharField(max_length=10,  default=True)

    #to use the comeptition title text as the object representation in the table
    def __str__(self):
        return self.competition_title

#class Submission(models.Model):
#    submission_score = models.IntegerField(default=0)
#    user_id = models.ForeignKey(User, on_delete = models.CASCADE)
#    competition_id = models.ForeignKey(Competition, on_delete = models.CASCADE)
