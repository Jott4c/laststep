from rest_framework_simplejwt.views import TokenObtainPairView
from django.urls import path
from . import views
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularSwaggerView,
)


urlpatterns = [
    path("users/", views.UserView.as_view()),
    path("users/<pk>/", views.UserDetailView.as_view()),
    path("users/me", views.UserMeView.as_view()),
    path("users/login", TokenObtainPairView.as_view()),
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "schema/swagger-ui/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
]
