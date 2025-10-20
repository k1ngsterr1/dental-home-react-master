from PIL import Image, ImageDraw, ImageFont

def create_dental_home_favicon():
    """Create favicon with Dental Home logo - house with tooth door"""
    sizes = [16, 32, 48, 64]
    images = []
    
    # Gold color matching the logo
    gold = (212, 175, 55)  # #D4AF37
    
    for size in sizes:
        # Create image with white/light background
        img = Image.new('RGBA', (size, size), (255, 255, 255, 255))
        draw = ImageDraw.Draw(img)
        
        # Scale factor (base design on 64px)
        scale = size / 64
        line_width = max(1, int(2 * scale))
        
        # Draw house outline
        # Left roof line
        draw.line([(10*scale, 8*scale), (32*scale, 24*scale)], fill=gold, width=line_width)
        
        # Right roof line  
        draw.line([(54*scale, 8*scale), (32*scale, 24*scale)], fill=gold, width=line_width)
        
        # Left wall
        draw.line([(18*scale, 24*scale), (18*scale, 56*scale)], fill=gold, width=line_width)
        
        # Right wall
        draw.line([(46*scale, 24*scale), (46*scale, 56*scale)], fill=gold, width=line_width)
        
        # Tooth-shaped door (simplified for small size)
        if size >= 32:
            # Top of tooth (rounded)
            tooth_top = [
                (28*scale, 44*scale),  # left top
                (26*scale, 40*scale),  # left curve
                (28*scale, 36*scale),  # left shoulder
                (32*scale, 34*scale),  # center top
                (36*scale, 36*scale),  # right shoulder
                (38*scale, 40*scale),  # right curve
                (36*scale, 44*scale),  # right top
            ]
            
            # Tooth body
            tooth_body = [
                (36*scale, 44*scale),  # right top
                (36*scale, 52*scale),  # right bottom
                (34*scale, 56*scale),  # right root
                (32*scale, 54*scale),  # center notch
                (30*scale, 56*scale),  # left root
                (28*scale, 52*scale),  # left bottom
                (28*scale, 44*scale),  # left top
            ]
            
            # Draw tooth outline
            draw.polygon(tooth_top + tooth_body[1:], outline=gold, width=line_width)
            
            # Add center line for tooth roots
            if size >= 48:
                draw.line([(32*scale, 48*scale), (32*scale, 54*scale)], fill=gold, width=max(1, int(scale)))
        else:
            # Simplified tooth for 16px
            draw.rectangle(
                [(26*scale, 36*scale), (38*scale, 56*scale)],
                outline=gold, 
                width=line_width
            )
        
        images.append(img)
    
    # Save as favicon.ico (multi-resolution)
    output_path = 'public/favicon.ico'
    images[0].save(
        output_path,
        format='ICO',
        sizes=[(s, s) for s in sizes]
    )
    
    # Also save individual sizes as PNG
    images[1].save('public/favicon-32x32.png', format='PNG')
    images[3].save('public/favicon-64x64.png', format='PNG')
    
    print("✓ Favicon created successfully!")
    print("Files created:")
    print(f"  - {output_path} (16x16, 32x32, 48x48, 64x64)")
    print("  - public/favicon-32x32.png")
    print("  - public/favicon-64x64.png")

if __name__ == "__main__":
    try:
        create_dental_home_favicon()
    except ImportError:
        print("Pillow library not found. Installing...")
        import subprocess
        subprocess.check_call(['pip', 'install', 'Pillow'])
        create_dental_home_favicon()
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
