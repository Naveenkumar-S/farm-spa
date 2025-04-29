'use server'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
 
export async function login(formData) {
  let payload = {
    email: formData.get('userId'),
    pwd: formData.get('pwd')
  }
  const response = await fetch('http://127.0.0.1:4444/v1/users/signin', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
  if (response.status === 200) {
    const cookieStore = await cookies()
    const cookiesArray = response.headers.getSetCookie()
    for (const cookie of cookiesArray) {
      const [name, value] = cookie.split(/=(.*)/s)
      if (name === 'jwt') {
        cookieStore.set('jwt', value)
      }
    }
    redirect('/')
  }
}