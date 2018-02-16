from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings
from . import views


app_name = 'yourhomefront_yourhome'

urlpatterns = [
    url(r'^apartments/?$', views.ApartmentList.as_view()),
    url(r'^apartments/(?P<pk>[0-9]+)/?$', views.ApartmentDetail.as_view()),
    url(r'^apartments/(?P<apartment_id>[0-9]+)/reviews/?$', views.ReviewList.as_view()),
    url(r'^users/?$', views.UserList.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/?$', views.UserDetail.as_view()),
    url(r'^bookings/?$', views.BookingList.as_view()),
    url(r'^booking/(?P<pk>[0-9]+)/?$', views.BookingDetail.as_view())
]
