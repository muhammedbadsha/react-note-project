from django.urls import path
from .import views 



urlpatterns = [
    path('<int:id>', views.get,name="index"),
    path('<int:id>/update',views.put,name="update"),
    path('<int:id>/delete',views.delete,name='delete'),
    path('list_of_notes',views.get_all,name= 'list_of_notes'),
    path('create',views.post,name = 'create'),
]