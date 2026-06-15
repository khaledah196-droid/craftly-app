export interface User {
  id: string
  email: string
  username: string
  display_name: string
  bio?: string
  profile_picture_url?: string
  profession?: string
  rating: number
  is_verified: boolean
  subscription_tier: 'free' | 'basic' | 'pro'
  created_at: string
}

export interface Post {
  id: string
  user_id: string
  content: string
  media_urls?: string[]
  likes_count: number
  comments_count: number
  created_at: string
  user?: User
}

export interface Message {
  id: string
  sender_id: string
  recipient_id: string
  content: string
  created_at: string
}