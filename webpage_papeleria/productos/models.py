from django.db import models

# Create your models here.
from django.db import models

from django.utils import timezone



# Create your models here.

class productos(models.Model):

    nombre = models.CharField(max_length=100)

    descripcion = models.TextField()

    precio = models.FloatField()

    cantidad = models.IntegerField()

    imagen = models.TextField()

    descuento = models.FloatField()

   

    class Meta:

        db_table = "productos"