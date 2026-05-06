from PIL import Image

# Backup original
import shutil
shutil.copy2('images/hero/1.jpg', 'images/hero/1_backup.jpg')

img = Image.open('images/hero/1.jpg')
width, height = img.size

# crop bottom 120 pixels
crop_height = 120
cropped_img = img.crop((0, 0, width, height - crop_height))
cropped_img = cropped_img.convert('RGB')

# save over original
cropped_img.save('images/hero/1.jpg')
print("Cropped image saved. Size:", cropped_img.size)
