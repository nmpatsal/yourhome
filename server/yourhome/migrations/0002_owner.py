# Generated by Django 2.0.1 on 2018-01-08 02:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yourhome', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Owner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('contact_no', models.CharField(max_length=20)),
                ('apartments', models.ManyToManyField(to='yourhome.Apartment')),
            ],
        ),
    ]