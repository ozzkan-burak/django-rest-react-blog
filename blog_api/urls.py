from django.urls import path
from .views import Postlist, PostDetail

app_name="blog_api"

urlpatterns = [
    path('<int:pk>/', PostDetail.as_view(), name='detailcreate'),
    path('', Postlist.as_view(), name='listcreate'),
]
