import { Clock, BarChart, CheckCircle, Palette, FileText, Box, Ruler } from 'lucide-react';
import { Course } from '../types/course';

const iconMap: Record<string, any> = {
  Palette,
  FileText,
  Box,
  Ruler,
};

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = iconMap[course.icon] || FileText;

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div className="h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500"></div>

      <div className="p-8">
        <div className="flex items-start justify-between mb-6">
          <div className="p-4 bg-gradient-to-br from-orange-100 to-pink-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-8 w-8 text-orange-600" />
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
            {course.level}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
          {course.title}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {course.description}
        </p>

        <div className="flex items-center space-x-6 mb-6 text-sm">
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="h-4 w-4 text-orange-500" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <BarChart className="h-4 w-4 text-pink-500" />
            <span>{course.level}</span>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {course.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-orange-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
