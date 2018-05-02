import datetime

from django.db import models
from django.utils import timezone
from datetime import datetime
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class Competition(models.Model):
    competition_title = models.CharField(max_length = 200)
    competition_description = models.CharField(max_length = 1000, default = "")
    created_at = models.DateTimeField(default=datetime.now, blank=True)
    deadline = models.CharField(max_length=10,  default=True)

    #to use the comeptition title text as the object representation in the table
    def __str__(self):
        return self.competition_title

class Profile():
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_judge = models.BooleanField()

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()

#class Submission(models.Model):
#    submission_score = models.IntegerField(default=0)
#    user_id = models.ForeignKey(User, on_delete = models.CASCADE)
#    competition_id = models.ForeignKey(Competition, on_delete = models.CASCADE)
