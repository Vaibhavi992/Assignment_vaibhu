#include<stdio.h>
int main()
{
	int array1[2][2],array2[2][2],i,j,result[2][2];
	printf("enter 4 values for first array");
	for(i=0;i<2;i++)
	{
		for(j=0;j<2;j++)
		{
			scanf("%d",&array1[i][j]);
		}
	}
	printf("enter 4 values for second array");
	for(i=0;i<2;i++)
	{
		for(j=0;j<2;j++)
		{
			scanf("%d",&array2[i][j]);
		}
	}
	for(i=0;i<2;i++)
	{
		for(j=0;j<2;j++)
		{
			result[i][j]=array1[i][j]+array2[i][j];
		}
	}
	printf("\nresult array is");
	for(i=0;i<2;i++)
	{
		for(j=0;j<2;j++)
		{
			printf("%d",result[i][j]);
		}
		printf("\n");
	}
	
	
	return 0;
}
