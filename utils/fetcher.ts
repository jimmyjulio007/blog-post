export const fetcher = async (
    url: string,
    options?: RequestInit,
  ) => {
    console.log('URL:', url)
    console.log('Options:', options)
  
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    })
    if (!res.ok) {
      let errorData
      try {
        errorData = await res.json()
        console.error(errorData)
      } catch {
        errorData = { message: 'Réponse JSON invalide' }
      }
      console.error('Erreur:', errorData)
      throw new Error(errorData.message || 'Erreur lors de la requête')
    }
  
    return res.json()
  }
  