# Generated by Django 2.0.1 on 2018-02-14 02:52

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('yourhome', '0029_auto_20180214_0424'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apartment',
            name='pub_date',
            field=models.DateTimeField(default=django.utils.timezone.now, verbose_name='date published'),
        ),
    ]
