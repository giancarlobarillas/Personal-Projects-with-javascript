import java.util.ArrayList;
import java.util.List;
public class ListExamples
{
	public static void main(String[] args)
	{
		List mylist=new ArrayList();
		mylist.add("Object 1");//0
		mylist.add("Object 2");//1
		mylist.add("Object 3");//2
		
		mylist.remove(2);
		
		mylist.get(0);
		
		String firstObject=(String) mylist.get(1);
		int size=mylist.size();
		System.out.println(firstObject);
		/*3 ways to iterate 
		Iterator iterator=mylist.iterator();
		while(iterator.hasNext()
		{
			Object next=iterator.next();
		}
		for(Object next:mylist)
		{
			
		}
		for(int i=0;i<mylist.size;i++)
		{
			Object next=mylist.get(i);
		}
		clear 
		mylist.clear();
		*/
	}
}