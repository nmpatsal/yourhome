# Generated by Django 2.0.1 on 2018-02-11 19:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('yourhome', '0018_auto_20180211_1815'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='checkuser',
            name='checkIfLogged',
        ),
    ]