def my_each(arr, &prc)
    for (i=0; i <arr.length; i++)
        &prc.call(arr[i])
        #or was it yield arr[i]?
    end
end