import { Column, Grid,AspectRatio, Button, GlobalTheme } from '@carbon/react'
import React from 'react'
import './/Grid.scss'


const Grid1 = () => {
  return (
    <Grid>
        <Column sm={3} md={7} lg={16} className='bordt'>Grid</Column>
        <Column sm={3} md={6} lg={14} className='bordt'><Button>Learn</Button></Column>
        <Column sm={1} md={2} lg={2} className='bordt'><Button>Logout</Button></Column>
        <Column sm={1} md={1} lg={4} className='left'>
            <Grid>
                <Column sm={1} md={2} lg={4} className='borda'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At soluta vero eius minus tempore hic delectus velit suscipit repudiandae, itaque voluptatem atque modi, doloribus dolore molestiae vel dolorem cumque. Eaque.</Column>
                <Column sm={1} md={2} lg={4} className='borda'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe magnam unde nesciunt eveniet earum voluptatibus? Reiciendis labore, assumenda tenetur, ratione laborum libero amet soluta pariatur sapiente, ex architecto beatae ipsam!</Column>
            </Grid>
        </Column>
        <Column sm={3} md={7} lg={12}>
        <Grid>
                <Column sm={1} md={2} lg={6} className='borda'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum alias itaque ut dicta eius esse tempore, odit officia sunt corrupti nisi, molestias amet quia beatae in! Facilis, soluta assumenda! Provident.</Column>
                <Column sm={1} md={2} lg={6} className='borda'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam fugiat optio itaque ipsa? Adipisci, atque eaque! Voluptatibus voluptate expedita reprehenderit ipsum rerum iusto consequuntur ab, atque tenetur accusamus minus repellendus?</Column>
                <Column sm={1} md={1} lg={6} className='borda'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque commodi ipsa neque ipsum laboriosam, aliquid harum dolorem? Quo alias omnis libero repellendus itaque. Fugit, odio excepturi molestiae a nobis officiis!</Column>
                <Column sm={1} md={2} lg={6} className='borda'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nemo rerum asperiores molestiae nobis perspiciatis. Pariatur quasi saepe eum. Ipsa illo praesentium iure similique, reprehenderit illum vero adipisci quidem ducimus.</Column>
        </Grid>
        </Column>
        {/* <Column sm={2} md={3} lg={6} className='bord'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum similique dolorem! Laborum voluptates, distinctio accusantium eos saepe quidem, consequatur ipsa quo, eum beatae vel animi non enim nostrum voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum similique dolorem! Laborum voluptates, distinctio accusantium eos saepe quidem, consequatur ipsa quo, eum beatae vel animi non enim nostrum voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum similique dolorem! Laborum voluptates, distinctio accusantium eos saepe quidem, consequatur ipsa quo, eum beatae vel animi non enim nostrum voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum similique dolorem! Laborum voluptates, distinctio accusantium eos saepe quidem, consequatur ipsa quo, eum beatae vel animi non enim nostrum voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum similique dolorem! Laborum voluptates, distinctio accusantium eos saepe quidem, consequatur ipsa quo, eum beatae vel animi non enim nostrum voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum similique dolorem! Laborum voluptates, distinctio accusantium eos saepe quidem, consequatur ipsa quo, eum beatae vel animi non enim nostrum voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum similique dolorem! Laborum voluptates, distinctio accusantium eos saepe quidem, consequatur ipsa quo, eum beatae vel animi non enim nostrum voluptate?Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum similique dolorem! Laborum voluptates, distinctio accusantium eos saepe quidem, consequatur ipsa quo, eum beatae vel animi non enim nostrum voluptate?</Column>
        <Column sm={2} md={5} lg={10} className='bord'>
            <Grid>
                <Column sm={2} md={5} lg={10} className='bord bord1'>Hello</Column>
                <Column sm={2} md={5} lg={10} className='bord bord2'>Hello</Column>
                <Column sm={2} md={5} lg={10} className='bord bord3'>Hello</Column>
            </Grid>
        </Column> */}
        
    </Grid>
  )
}

export default Grid1