# Generated by Django 2.0.3 on 2018-05-01 05:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('competitions', '0005_competition_submissions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='competition',
            name='submissions',
            field=models.FileField(blank=True, null=True, upload_to=''),
        ),
    ]