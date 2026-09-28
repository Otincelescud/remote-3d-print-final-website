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
    <Card className="h-full flex flex-col rounded-md transition-all hover:ring-orange-500/50 hover:bg-white/5">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{shortDescription}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Badge variant={statusVariant[status]} className="text-sm text-muted-foreground">{statusLabel[status]}</Badge>
        <img src={image} alt={title} className="aspect-video object-cover" />
      </CardContent>
    </Card>
  )
}

export default ProjectCard