from django.db import models
from django.utils import timezone
from django.core import serializers
from django.forms import ModelForm
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User
from django.db.models.signals import post_save, pre_delete
from django.dispatch import receiver

import json

# Create your models here.


class Checkuser(models.Model):

	user = models.OneToOneField(User, on_delete=models.CASCADE)

	def __unicode__(self):
		return self.user.username


class Apartment(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	title = models.CharField(max_length=200)
	pub_date = models.DateTimeField('date published', default=timezone.now)
	city = models.CharField(max_length=200)
	description = models.TextField(max_length=500, default="No descriptin provided by the owner")
	price = models.IntegerField(default =0)
	photos = models.ImageField(max_length=None,  upload_to = 'static/assets/img/')

	@property
	def userUsername(self):
		return  self.user.username

	def __str__(self):
		return "%s %s %s %s %s" % (self.title, self.pub_date, self.city, self.description, self.price)

class Review(models.Model):
	apartment = models.ForeignKey(Apartment, on_delete=models.CASCADE)
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	title = models.CharField(max_length=200)
	text = models.TextField(default="")
	review_date = models.DateTimeField('review date', default=timezone.now)

	@property
	def userUsername(self):
		return  self.user.username

	def __str__(self):
		return "%s %s %s" % (self.title, self.text, self.review_date)

class Booking(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	apartment = models.ForeignKey(Apartment, on_delete=models.CASCADE)
	name = models.CharField(max_length=200)
	contact_no = models.CharField(max_length=20)
	comment = models.TextField(max_length=500, default="No Comment provided by the visitor")

	def __str__(self):
		return "%s %s %s" % (self.name, self.contact_no, self.comment)
