from django.db import models

# Create your models here.
from django.db import models

from django.utils import timezone



# Create your models here.

class ventas(models.Model):

    nombre = models.CharField(max_length=100)

    costo = models.FloatField()

    vendido_at =  models.DateTimeField(default=timezone.now)

   
    class Meta:

        db_table = "ventas"