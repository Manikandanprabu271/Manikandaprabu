"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpen, Calendar, MapPin, Users, Bell, GraduationCap, Clock, Star, ChevronRight, Plus } from "lucide-react"

export default function CollegeApp() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const upcomingClasses = [
    { name: "Computer Science 101", time: "9:00 AM", room: "Tech Building 205", professor: "Dr. Smith" },
    { name: "Calculus II", time: "11:30 AM", room: "Math Hall 301", professor: "Prof. Johnson" },
    { name: "English Literature", time: "2:00 PM", room: "Liberal Arts 150", professor: "Dr. Brown" },
  ]

  const grades = [
    { course: "Computer Science 101", grade: "A-", credits: 3 },
    { course: "Calculus II", grade: "B+", credits: 4 },
    { course: "English Literature", grade: "A", credits: 3 },
    { course: "Physics I", grade: "B", credits: 4 },
  ]

  const events = [
    { name: "Career Fair", date: "March 15", location: "Student Center", type: "Career" },
    { name: "Spring Concert", date: "March 20", location: "Auditorium", type: "Entertainment" },
    { name: "Study Group - CS", date: "March 12", location: "Library Room 204", type: "Academic" },
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 border-2 border-white">
            <AvatarImage src="/diverse-students-studying.png" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, John!</h1>
            <p className="opacity-90">Computer Science Major • Junior Year</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">3.7</div>
            <div className="text-sm text-muted-foreground">Current GPA</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">89</div>
            <div className="text-sm text-muted-foreground">Credits Earned</div>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Today's Classes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingClasses.map((class_, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <div className="font-medium">{class_.name}</div>
                <div className="text-sm text-muted-foreground">
                  {class_.professor} • {class_.room}
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-blue-600">{class_.time}</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent" onClick={() => setActiveTab("grades")}>
          <GraduationCap className="w-6 h-6" />
          View Grades
        </Button>
        <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent" onClick={() => setActiveTab("events")}>
          <Calendar className="w-6 h-6" />
          Campus Events
        </Button>
      </div>
    </div>
  )

  const renderGrades = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Academic Progress</h2>
        <Badge variant="secondary">Spring 2024</Badge>
      </div>

      {/* GPA Overview */}
      <Card>
        <CardContent className="p-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">3.7</div>
            <div className="text-muted-foreground">Current Semester GPA</div>
            <div className="flex justify-center gap-4 mt-4 text-sm">
              <div>
                Cumulative: <span className="font-medium">3.65</span>
              </div>
              <div>
                Credits: <span className="font-medium">89/120</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Grades */}
      <Card>
        <CardHeader>
          <CardTitle>Current Courses</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {grades.map((grade, index) => (
            <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <div className="font-medium">{grade.course}</div>
                <div className="text-sm text-muted-foreground">{grade.credits} Credits</div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    grade.grade.startsWith("A") ? "default" : grade.grade.startsWith("B") ? "secondary" : "outline"
                  }
                >
                  {grade.grade}
                </Badge>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )

  const renderEvents = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Campus Events</h2>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="font-medium">{event.name}</div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <Badge variant="outline">{event.type}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderMap = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Campus Map</h2>

      {/* Map Placeholder */}
      <Card>
        <CardContent className="p-0">
          <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-2 text-blue-600" />
              <div className="font-medium">Interactive Campus Map</div>
              <div className="text-sm text-muted-foreground">Find buildings, parking, and amenities</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Locations */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-16 flex-col gap-1 bg-transparent">
          <BookOpen className="w-5 h-5" />
          <span className="text-xs">Library</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col gap-1 bg-transparent">
          <Users className="w-5 h-5" />
          <span className="text-xs">Student Center</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col gap-1 bg-transparent">
          <GraduationCap className="w-5 h-5" />
          <span className="text-xs">Academic Buildings</span>
        </Button>
        <Button variant="outline" className="h-16 flex-col gap-1 bg-transparent">
          <MapPin className="w-5 h-5" />
          <span className="text-xs">Parking</span>
        </Button>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "grades":
        return renderGrades()
      case "events":
        return renderEvents()
      case "map":
        return renderMap()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="max-w-md mx-auto bg-background min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-lg">CampusLife</span>
          </div>
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pb-20">{renderContent()}</div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-background border-t">
        <div className="grid grid-cols-4 gap-1 p-2">
          <Button
            variant={activeTab === "dashboard" ? "default" : "ghost"}
            size="sm"
            className="h-12 flex-col gap-1"
            onClick={() => setActiveTab("dashboard")}
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-xs">Home</span>
          </Button>
          <Button
            variant={activeTab === "grades" ? "default" : "ghost"}
            size="sm"
            className="h-12 flex-col gap-1"
            onClick={() => setActiveTab("grades")}
          >
            <Star className="w-4 h-4" />
            <span className="text-xs">Grades</span>
          </Button>
          <Button
            variant={activeTab === "events" ? "default" : "ghost"}
            size="sm"
            className="h-12 flex-col gap-1"
            onClick={() => setActiveTab("events")}
          >
            <Calendar className="w-4 h-4" />
            <span className="text-xs">Events</span>
          </Button>
          <Button
            variant={activeTab === "map" ? "default" : "ghost"}
            size="sm"
            className="h-12 flex-col gap-1"
            onClick={() => setActiveTab("map")}
          >
            <MapPin className="w-4 h-4" />
            <span className="text-xs">Map</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
