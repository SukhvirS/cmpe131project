# Generated by Django 2.0.3 on 2018-05-01 22:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('competitions', '0013_remove_competition_deadline'),
    ]

    operations = [
        migrations.AddField(
            model_name='competition',
            name='deadline',
            field=models.CharField(default=True, max_length=10),
        ),
    ]
