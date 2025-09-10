import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get the form data from the request
    const formData = await request.formData();
    
    // Forward the request to your backend
    const response = await fetch('http://localhost:8000/remove-bg', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Backend error: ${response.status}`);
    }

    // Get the processed image as a blob
    const imageBlob = await response.blob();
    
    // Return the image with proper headers
    return new NextResponse(imageBlob, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { error: 'Failed to process image' },
      { status: 500 }
    );
  }
}
