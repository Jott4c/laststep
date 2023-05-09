from django.db import models
from django.contrib.auth.models import AbstractUser


class Address(models.Model):
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)


class User(AbstractUser):
    USER_TYPE = (
        ("P", "Patient"),
        ("N", "Nurse"),
    )
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    user_type = models.CharField(max_length=1, choices=USER_TYPE)
    date_of_birth = models.DateField(null=True, blank=True)
    skills = models.CharField(max_length=255, null=True, blank=True)
    diseases = models.CharField(max_length=255, null=True, blank=True)
    url_image = models.CharField(max_length=255, null=True, blank=True)
    phone = models.CharField(max_length=15)
    address = models.ForeignKey(
        Address, on_delete=models.SET_NULL, null=True, blank=True
    )
