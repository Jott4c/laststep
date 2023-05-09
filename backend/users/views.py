from django.shortcuts import get_object_or_404
from rest_framework.views import APIView, Request, Response, status
from rest_framework_simplejwt.authentication import JWTAuthentication
from .serializers import UserSerializer
from .models import User
from rest_framework import generics
from .permissions import IsActiveTrue


class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetailView(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsActiveTrue]

    queryset = User.objects.all()
    serializer_class = UserSerializer

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()

        instance.is_active = False

        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserMeView(generics.ListAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsActiveTrue]

    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        user_id = request.user.id
        queryset = User.objects.filter(id=user_id)
        serializer = UserSerializer(queryset, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
