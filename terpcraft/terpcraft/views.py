from django.http import HttpResponse

def homepage(request):
    return HttpResponse("Hello World! Welcome to the TerpCraft Homepage.")

def about(request):
    return HttpResponse("Hello world! This is the TerpCraft About page.")