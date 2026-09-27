import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const statusVariant = {
  finished: 'default',
  ongoing: 'secondary',
  planned: 'outline',
}
const statusLabel = {
  finished: 'Finished',
  ongoing: 'In progress',
  planned: 'Not started',
}

function ProjectCard({ project }) {
  const { title, shortDescription, image, status } = project

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{shortDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <Badge variant={statusVariant[status]}>{statusLabel[status]}</Badge>
        <img src={image} alt={title} className="rounded-t-xl aspect-video object-cover" />
      </CardContent>
    </Card>
  )
}

export default ProjectCard