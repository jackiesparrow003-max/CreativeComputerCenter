import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium text-gray-700">
                Unlock Your Creative Potential
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Creative Computer Center
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Master professional design tools and software skills. Transform
              your creativity into a rewarding career with our industry-focused
              courses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToCourses}
                className="group px-8 py-4 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Explore Courses</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-4 bg-white text-gray-700 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Contact Us
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">95%</div>
                <div className="text-sm text-gray-600 mt-1">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-3xl blur-3xl opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl">
                <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Design Mastery</div>
                  <div className="text-sm text-gray-600">Professional Training</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">3D Visualization</span>
                  <div className="w-24 h-2 bg-blue-200 rounded-full overflow-hidden">
                    <div className="h-full w-4/5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">AutoCAD Design</span>
                  <div className="w-24 h-2 bg-orange-200 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-pink-50 rounded-lg">
                  <span className="text-sm font-medium text-gray-700">Graphic Design</span>
                  <div className="w-24 h-2 bg-pink-200 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    Industry-Standard Tools
                  </div>
                  <div className="text-sm text-gray-600 mt-1">
                    Learn software used by professionals worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
