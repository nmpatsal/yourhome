from django.contrib import admin

# Register your models here.

from .models import Apartment, Review, Booking, Checkuser
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User


admin.site.register(Apartment)
admin.site.register(Review)
admin.site.register(Booking)
admin.site.register(Checkuser)

class CheckuserInline(admin.StackedInline):
    model = Checkuser
    can_delete = False
    verbose_name_plural = 'Checkusers'

# Define a new User admin
class UserAdmin(BaseUserAdmin):
    inlines = (CheckuserInline, )

# Re-register UserAdmin
admin.site.unregister(User)
admin.site.register(User, UserAdmin)
