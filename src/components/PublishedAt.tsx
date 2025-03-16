import { POST_QUERYResult } from '@/sanity/types'
import dayjs from 'dayjs'

type PublishedAtProps = {
  publishedAt: NonNullable<POST_QUERYResult>['publishedAt']
}

export function PublishedAt({ publishedAt }: PublishedAtProps) {
  return publishedAt ? (
    <p>
      {dayjs(publishedAt).format('MMMM D, YYYY')}
    </p>
  ) : null
}