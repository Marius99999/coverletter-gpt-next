export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <h1 className="text-2xl font-bold">CoverLetterGPT</h1>
          <nav className="flex gap-4">
            <button className="px-4 py-2 hover:bg-gray-800 rounded-md">Jobs Dashboard</button>
            <button className="px-4 py-2 hover:bg-gray-800 rounded-md">Profile</button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="mx-auto max-w-3xl rounded-lg border border-gray-800 bg-gray-900">
          <div className="border-b border-gray-800 p-6">
            <h2 className="text-xl font-semibold">Job Info</h2>
          </div>

          <div className="space-y-6 p-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Job Title
                </label>
                <input
                  id="title"
                  className="w-full rounded-md border border-gray-800 bg-gray-800 px-3 py-2"
                  placeholder="Enter job title"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  id="company"
                  className="w-full rounded-md border border-gray-800 bg-gray-800 px-3 py-2"
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium mb-2">
                  Location
                </label>
                <input
                  id="location"
                  className="w-full rounded-md border border-gray-800 bg-gray-800 px-3 py-2"
                  placeholder="Enter job location"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Job Description
                </label>
                <textarea
                  id="description"
                  className="w-full rounded-md border border-gray-800 bg-gray-800 px-3 py-2 min-h-[200px]"
                  placeholder="Copy & paste the job description here"
                />
              </div>
            </div>

            <button className="w-full rounded-md bg-purple-500 px-4 py-2 font-medium hover:bg-purple-600">
              Generate Cover Letter
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}
