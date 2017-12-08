defmodule ElixirscriptTest do
  def start(_, _), do: nil

  def regex_replace, do: Regex.replace(~r/foo/, "hello foo", "world")
  def string_replace, do: String.replace("hello foo", ~r/foo/, "world")
  def regex_match, do: Regex.match?(~r/foo/, "hello foo")
end
