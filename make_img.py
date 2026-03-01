import base64
png_data = b"iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
with open(r'c:\Users\kk\OneDrive - BENNETT UNIVERSITY\Desktop\campusConnect\test_banner.png', 'wb') as f:
    f.write(base64.b64decode(png_data))
