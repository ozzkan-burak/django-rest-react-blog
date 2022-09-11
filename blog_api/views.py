from rest_framework import generics
from blog_models import Post
from .serializers import PostSerializers

class PostList(generics.ListCreativeAPIView):
  pass

class PostDetail(generics.RetrieveDestroyAPIView):
  pass
