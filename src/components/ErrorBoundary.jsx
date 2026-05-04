import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("App render error:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-black px-6 py-16 text-white">
          <div className="mx-auto max-w-3xl rounded-2xl border border-red-400/30 bg-red-950/20 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-red-200">
              App error
            </p>
            <h1 className="mt-4 text-2xl font-semibold">
              The page could not render.
            </h1>
            <pre className="mt-4 whitespace-pre-wrap text-sm text-red-100">
              {this.state.error.message}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
