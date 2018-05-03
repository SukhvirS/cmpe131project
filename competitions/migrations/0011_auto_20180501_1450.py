# Generated by Django 2.0.3 on 2018-05-01 21:50

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('competitions', '0010_auto_20180430_2310'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Submission',
        ),
        migrations.RemoveField(
            model_name='competition',
            name='submission',
        ),
        migrations.AddField(
            model_name='competition',
            name='deadline',
            field=models.DateField(default=datetime.datetime.now),
        ),
    ]