import datetime

from django.db import models
from django.utils import timezone
from datetime import datetime

# Create your models here.
class Competition(models.Model):
    competition_title = models.CharField(max_length = 200)
    created_at = models.DateTimeField(default=datetime.now, blank=True)

    #to use the comeptition title text as the object representation in the table
    def __str__(self):
        return self.competition_title
