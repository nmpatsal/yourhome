# Generated by Django 2.0.1 on 2018-02-13 04:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('yourhome', '0027_review_username'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='username',
        ),
    ]
