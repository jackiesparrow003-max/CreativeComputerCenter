import { Award, Users, Target, Lightbulb } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Industry Certified',
      description: 'Our programs are recognized and certified by leading industry organizations',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from professionals with years of real-world experience',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Target,
      title: 'Practical Focus',
      description: 'Hands-on training with real projects to build your portfolio',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Creative Environment',
      description: 'State-of-the-art facilities designed to inspire innovation',
      color: 'from-purple-500 to-purple-600'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-block bg-orange-100 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-orange-700">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Empowering Creative Minds Since 2014
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Creative Computer Center is a premier institute dedicated to
              transforming aspiring designers and professionals into industry-ready
              experts. With over a decade of excellence, we've trained hundreds of
              students who are now thriving in their creative careers.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our comprehensive curriculum combines theoretical knowledge with
              intensive practical training, ensuring you master the tools and
              techniques used by professionals worldwide. Join us and turn your
              creative passion into a successful career.
            </p>

            <div className="flex items-center space-x-4 pt-4">
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-pink-600 rounded"></div>
              <span className="text-gray-600 font-medium">Trusted by 500+ Students</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
                <div className="text-sm text-gray-700">Years of Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-blue-50 p-6 rounded-2xl mt-8">
                <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
                <div className="text-sm text-gray-700">Students Trained</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl -mt-8">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-sm text-gray-700">Success Rate</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-orange-50 p-6 rounded-2xl">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-gray-700">Job Assistance</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
              >
                <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-lg mb-4`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
