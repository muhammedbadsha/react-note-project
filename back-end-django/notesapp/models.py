from django.db import models
import uuid
# Create your models here.


class Note(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=30, null=True, blank=True)
    notes = models.CharField(max_length=5000, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title