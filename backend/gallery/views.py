from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(["GET"])
def gallery_view(request):
    data = [
        {
            "media_url": "https://picsum.photos/400?1",
            "caption": "Beauty session"
        },
        {
            "media_url": "https://picsum.photos/400?2",
            "caption": "Skin care"
        },
        {
            "media_url": "https://picsum.photos/400?3",
            "caption": "Facial treatment"
        },
    ]
    return Response(data)