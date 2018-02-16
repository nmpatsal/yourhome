from rest_framework import serializers
from .models import Apartment, Review, Checkuser, Booking
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework_jwt.settings import api_settings
from django.contrib.auth import get_user_model

# UserModel = get_user_model()

class ApartmentSerializer(serializers.ModelSerializer):
    userUsername = serializers.ReadOnlyField()

    class Meta:
        model = Apartment
        fields = ('id', 'user', 'title', 'description', 'city', 'pub_date', 'price', 'photos', 'userUsername')

class ReviewSerializer(serializers.ModelSerializer):
    userUsername = serializers.ReadOnlyField()

    class Meta:
        model = Review
        fields = ('id', 'user', 'title', 'text', 'review_date', 'apartment', 'userUsername')

class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = ('id', 'user', 'apartment', 'name', 'contact_no', 'comment')

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id','username' , 'password')


    def create(self, validated_data):

        user = User.objects.create(
            username=validated_data['username'],
            password = make_password(validated_data['password'])
        )

        return user
