# Generated by Django 2.0.1 on 2018-02-10 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yourhome', '0013_auto_20180210_1629'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apartment',
            name='photos',
            field=models.ImageField(default='', upload_to='static/assets/img/'),
        ),
    ]
