class Vertex
    attr_accessor :value, :out_edges, :in_edges
     def initialize(value)
       @out_edges = []
       @in_edges = []
       @value = value
     end
   end
   
   class Edge
    attr_accessor :from_vertex, :to_vertex, :cost
     def initialize(from_vertex, to_vertex, cost = 1)
       @cost = cost 
       @from_vertex = from_vertex
       @to_vertex = to_vertex
       @from_vertex.out_edges << self
       @to_vertex.in_edges << self
     end
   
     def destroy!
       @from_vertex.out_edges.delete(self)
       @to_vertex.in_edges.delete(self)
       @to_vertex, @from_vertex = nil, nil
     end
   
     protected
     
   end
   