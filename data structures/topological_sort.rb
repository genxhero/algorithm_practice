def topological_sort(vertices)
    queue = []
    counts = {}
    sorted_vertices = []

    vertices.each do |vertex|
        counts[vertex] = vertex.in_edges.length
        queue << vertex if counts[vertex] == 0
    end

    until queue.length == 0 
        vertex = queue.shift 
        sorted_vertices << vertex
        vertex.out_edges.each do |edge|
          to_vertex = edge.to_vertex
          counts[to_vertex] -= 1
          queue << to_vertex if counts[to_vertex] == 0
        end
    end
  return [] if sorted_vertices.length != vertices.length
  sorted_vertices
end