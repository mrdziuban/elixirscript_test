defmodule ElixirscriptTest.Mixfile do
  use Mix.Project

  def project do
    [
      app: :elixirscript_test,
      version: "0.1.0",
      elixir: "~> 1.5",
      compilers: Mix.compilers ++ [:elixir_script],
      deps: deps(),
      elixir_script: [
        input: ElixirscriptTest,
        output: "priv/elixir_script/build/elixirscript.build.js"
      ]
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:elixir_script, "0.31.1"}
    ]
  end
end
