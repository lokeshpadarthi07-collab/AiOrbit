import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { TaskDetailClient } from "@/components/detail/TaskDetailClient";

const { useQueryMock, refetchMock } = vi.hoisted(() => ({
  useQueryMock: vi.fn(),
  refetchMock: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  useParams: () => ({ slug: "missing-task" }),
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("@tanstack/react-query", () => ({
  useQuery: useQueryMock,
}));

vi.mock("@/lib/tasks-api", () => ({
  fetchTask: vi.fn(),
  fetchTasks: vi.fn(),
}));

vi.mock("@/lib/api", () => ({
  API_URL: "https://example.test",
  getFromCache: vi.fn(),
}));

vi.mock("@/components/TaskDetail", () => ({
  TaskDetail: () => <div>Task detail</div>,
}));

describe("TaskDetailClient", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    useQueryMock.mockReturnValue({
      data: null,
      isLoading: false,
      isError: false,
      refetch: refetchMock,
    });
  });

  it("shows a recoverable state when the task lookup returns null", () => {
    render(<TaskDetailClient />);

    expect(screen.getByText("This task could not be found or loaded.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Back to Tasks" })).toHaveAttribute("href", "/tasks");
    expect(screen.queryByText("Task detail")).not.toBeInTheDocument();
  });
});