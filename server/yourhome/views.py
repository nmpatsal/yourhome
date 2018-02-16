

from .models import Apartment, Review, Checkuser, Booking
from .serializers import ApartmentSerializer, ReviewSerializer, UserSerializer, BookingSerializer
from rest_framework import generics

from django.contrib.staticfiles import views
from rest_framework import permissions
from django.contrib.auth.models import User


def index(request, path=''):
    if (path.endswith('.js')):
        return views.serve(request, path)
    else:
        return views.serve(request, 'index.html')

def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user).data
    }

class ApartmentList(generics.ListCreateAPIView):
    serializer_class = ApartmentSerializer

    def get_queryset(self):
        queryset = Apartment.objects.all()
        title = self.request.query_params.get('title', None)
        if title is not None:
            queryset = queryset.filter(title__contains=title)
        return queryset

class ApartmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Apartment.objects.all()
    serializer_class = ApartmentSerializer

class ReviewList(generics.ListCreateAPIView):
    serializer_class = ReviewSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = Review.objects.all()
        apartment_id = self.kwargs.get('apartment_id', None)
        if apartment_id is not None:
            queryset = queryset.filter(apartment=apartment_id)
        return queryset

class ReviewDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class UserList(generics.ListCreateAPIView):
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = User.objects.all()
        return queryset

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class BookingList(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    # def get_queryset(self):
    #     queryset = Booking.objects.all()
    #     id = self.kwargs.get('id', None)
    #     if id is not None:
    #         queryset = queryset.filter(apartment=id)
    #     return queryset
#
class BookingDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
