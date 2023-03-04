from django.shortcuts import render
from django.http.response import JsonResponse
from django.views import View
import json
# Create your views here.
class Login(View):
    def get(self, request, *args, **kwargs):
        return JsonResponse({'mensaje': 'perro'})

    def post(self, request, *args, **kwargs):
        datos = json.loads(request.body)
        return JsonResponse({'mensaje': datos})
# class TopUsers(View):
    # @method_decorator(csrf_exempt)
    # def dispatch(self, request, *args, **kwargs):
        # return super().dispatch(request, *args, **kwargs)

    # def get(self, request):
        # top_users = list(UserModel.objects.all().order_by("-score")[:3].values())
        # print(top_users)
        # return JsonResponse({"topuser": top_users})

