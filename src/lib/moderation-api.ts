export type ModerationModel = 'convnext' | 'xlmr'

export interface ModerationSignal {
  score: number
  label: string
  reasons: string[]
}

export interface ModerationResult {
  allowed: boolean
  score: number
  label: string
  reasons: string[]
  model: string
  visual?: ModerationSignal
  text?: ModerationSignal
  ocr_raw?: string
  inference_ms?: number
}

export interface ModerationResponse {
  success: boolean
  message: string
  data?: ModerationResult
}

export interface HealthData {
  status: string
  service: string
  detector_mode?: string
}

function resolveApiBase(): string {
  const configured = import.meta.env.VITE_API_BASE?.trim()
  if (configured) return configured.replace(/\/$/, '')

  if (typeof window === 'undefined') return ''

  const { protocol, hostname, port, origin } = window.location
  if (!port || port === '80' || port === '443') {
    return origin
  }
  return `${protocol}//${hostname}:8080`
}

export async function moderateImage(
  file: File,
  model: ModerationModel,
): Promise<ModerationResponse> {
  const form = new FormData()
  form.append('image', file)
  form.append('model', model)

  let res: Response
  try {
    res = await fetch(`${resolveApiBase()}/api/v1/moderate/image`, {
      method: 'POST',
      body: form,
    })
  } catch {
    throw new Error('NETWORK')
  }

  try {
    return (await res.json()) as ModerationResponse
  } catch {
    throw new Error('NETWORK')
  }
}

export async function fetchHealth(): Promise<HealthData | null> {
  try {
    const res = await fetch(`${resolveApiBase()}/api/v1/health`)
    if (!res.ok) return null
    const payload = await res.json()
    return payload.data as HealthData
  } catch {
    return null
  }
}
