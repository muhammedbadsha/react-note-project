from django.shortcuts import get_object_or_404, render
from django.http import JsonResponse, HttpResponse
from rest_framework.views import Response
from rest_framework.decorators import api_view
from .models import Note
from .serializers import NoteSerializers
# Create your views here.
@api_view(['GET'])
def get(request,id):
        queryset = get_object_or_404(Note, id = id )
        serializer_class = NoteSerializers(queryset)
        return Response(serializer_class.data)
@api_view(['put','GET'])
def put(request,id):
        print('ddddddddddddddddd')
        queryset = get_object_or_404(Note, id = id)
        print(queryset)
        serializer_class = NoteSerializers(instance=queryset, data=request.data, )
        if serializer_class.is_valid():
            serializer_class.save()

            return Response(serializer_class.data)
        else:
            return Response(serializer_class.data)
@api_view(["delete"])
def delete(request,id):
        if id :
            queryset = Note.objects.get(id = id)
            # serializer_class = NoteSerializers(queryset)
            queryset.delete()
            return Response({'status':'data successfully deleted'})
        return Response({'status':'id not found'})
    
@api_view(["GET"])
def get_all(request):
        queryset = Note.objects.all().order_by('-created_at','updated_at')
        serializer_class = NoteSerializers(queryset,many=True)
        return Response(serializer_class.data)
@api_view(["post"])
def post(request):
        serializ = NoteSerializers(data = request.data)
        if serializ.is_valid():
            serializ.save()
            return Response(serializ.data)
        else:
            return Response({'status':'faiild',})
        
    
        
    
